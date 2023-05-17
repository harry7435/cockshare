# cockshare
{project brief description}{version?}
[demo link](https://.....)

## Installation
{installation}
{local 실행 방법}
{참고사항 ex) npmrc, .env.local 등 repository clone 후 셋팅 필요한 경우}

## Project Doc
### Built With

|package name|version|
|------------|-------|
|React       |18.0.0 |
|typescript  |x.x.x^ |

*자세한 개발 스택은 package.json 참고*

### Pages
1. `pages/index.tsx`: 메인페이지
2. `pages/login.tsx`: 로그인페이지
...

### Configurations
```jsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};
```

## Information
- [project notion](https://notion.so/.../...)
  - {포함 항목}
  - 기획 배경
  - 와이어프레임
  - 태스크
  - 관련 기술 문서 등
- ...

## Author
- [CHO IK JUN(조익준)](https://github.com/harry7435)
