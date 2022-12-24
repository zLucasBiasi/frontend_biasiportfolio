import { useState } from "react";
import { Button } from "../../utils/Button";
import { Form } from "../../utils/Form";
import { Input } from "../../utils/Input";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <Form>
                <Input
                    id="email"
                    label="Email"
                    type="text"
                    value={email}
                    setValue={({ target }) => setEmail(target.value)}
                />

                <Input
                    id="Password"
                    label="Password"
                    type="password"
                    value={password}
                    setValue={({ target }) => setPassword(target.value)}
                />
                <Button type="submit">Login</Button>
            </Form>
        </>
    );
};

export default Login;
