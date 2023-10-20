import { Request, Response } from "express";
import { usersRepository } from "../repositories";
import AppError from "../../error";
import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";

export const sessionUserService = async (req: Request, res: Response) => {

    const { email, password } = req.body
    
    const foundEmail = await usersRepository.findOne({where: {
        email: email
    }})

    if(!foundEmail) throw new AppError("Invalid credentials", 401)

    const passwordIsValid = compareSync(password, foundEmail.password)

    if(!passwordIsValid) throw new AppError("Invalid credentials", 401)

    const token: string = sign(
        {admin: foundEmail.admin, id: foundEmail.id},
        process.env.SECRET_KEY!,
        {subject: foundEmail.id.toString(), expiresIn: process.env.EXPIRES_IN!}
    ) 

    return {token}
}