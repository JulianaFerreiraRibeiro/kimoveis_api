import AppError from "../../error";
import { CreateRealEstate } from "../interfaces/realEstates.interface";
import { addressesRepository, categoriesRepository, realEstatesRepository } from "../repositories";

export const createRealEstateService = async (payload: CreateRealEstate) => {

    const {address} = payload
    const {categoryId} = payload
    
    const isAddressCreated = await addressesRepository.findOneBy({
        zipCode: address.zipCode, city: address.city, street: address.street, state: address.state, number: address.number
    })

    if (isAddressCreated) throw new AppError("Address already exists", 409)

    await addressesRepository.save(address)

    const newRealEstate = realEstatesRepository.create({
        ...payload,
        category: {id: categoryId}
    })

    await realEstatesRepository.save(newRealEstate)

    return newRealEstate
}