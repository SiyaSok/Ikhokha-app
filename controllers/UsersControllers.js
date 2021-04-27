import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UsersModel from '../models/UsersModel.js'



export const signIn = async (req, res, next) => {

    const UserData = req.body.formData;

    const { email, password } = UserData;
    try {

        const existingUser = await UsersModel.findOne({ email });

        if (!existingUser) return res.status(404).json({
            message: "User does not exits"
        });


        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)


        if (!isPasswordCorrect) return res.status(404).json({
            message: "Invalid credentials."
        });


        const token = jwt.sign({
            email: existingUser.email,
            id: existingUser._id,
        }, 'test', { expiresIn: "1h" });

        return res.status(200).json({
            user: existingUser,
            token
        });


    } catch (error) {

        return res.status(500).send({
            status: 500,
            error: `Something want wrong.`
        })
    }


}
export const signUp = async (req, res, next) => {

    const newUserData = req.body.formData;

    const { name, lastName, email, password, confirmPassword } = newUserData;
    try {

        const existingUser = await UsersModel.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "User already exists" });


        if (password !== confirmPassword) return res.status(400).json({ message: "Password don't match" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await UsersModel.create(
            { name, lastName, email, password: hashedPassword }
        )

        const token = jwt.sign({
            email: newUser.email,
            id: newUser._id,
        }, 'test', { expiresIn: "1h" });

        return res.status(200).json({
            newUser,
            token
        });


    } catch (error) {

        return res.status(500).send({
            status: 500,
            error: `Something want wrong.`
        })
    }


}
