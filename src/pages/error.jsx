import { Result } from "antd";
import { _ButtonColorTypes } from "antd/es/button";
import { Button } from "antd/es/radio";
import { Link, NavLink, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (

    <Result
      status="403"
      title="Oops"
      subTitle={error.statusText || error.message}
      extra={<Button type="primary">
        <NavLink to={"/"}>
          <span>Back to home Page</span>
        </NavLink>
      </Button>}
    />

  );
}