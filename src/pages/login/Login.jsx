/* eslint-disable*/

import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

import styles from './Login.module.css';
import { appAuth, auth } from '../../firebase/config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isPending, login } = useLogin();
  const [userData, setUserData] = useState(null);

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    // submit 은 기본적으로 페이지 리로딩을 불러일으키기 때문에... 그런 현상을 막기 위해 적어준다.
    event.preventDefault();
    // console.log('로그인: ',email, password);
    login(email, password);
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(appAuth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <fieldset>
          <legend>로그인</legend>
          <label htmlFor="myEmail">email : </label>
          <input
            type="email"
            id="myEmail"
            required
            onChange={handleData}
            value={email}
          />
          <label htmlFor="myPassWord">password : </label>
          <input
            type="password"
            id="myPassWord"
            required
            onChange={handleData}
            value={password}
          />
          <button onClick={googleLogin}>구글 로그인</button>
          {/* <GoogleLogin
            clientId="258595202426-3fj67hhm9hk0ef5568c54u2v2fla4c1f.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={handleGoogleLogin}
            onFailure={(res) => console.log(res)}
            cookiePolicy={'single_host_origin'}
          /> */}
          {!isPending && (
            <button type="submit" className={styles.btn}>
              로그인
            </button>
          )}
          {isPending && <strong>로그인 진행중...</strong>}
          {error && <strong>{error}</strong>}
        </fieldset>
      </form>
    </>
  );
}
