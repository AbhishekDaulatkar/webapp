
import { Button, Checkbox, Form, Input } from "antd";

export default function FormEx(props) {
  return (
    <>
      <form>
        <label>{props.title}</label>

        <input InputType="submit" />
      </form>
    </>
  );
}