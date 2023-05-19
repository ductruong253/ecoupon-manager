import { IsNumber, IsString } from "class-validator"

export class CreateCustomerDto {

    @IsString()
    fullName: string

    @IsNumber()
    groupId: number
}