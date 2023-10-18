import AppError from "../../error";
import { CreateSchedule } from "../interfaces/schedules.interface";
import { realEstatesRepository, schedulesRepository, usersRepository } from "../repositories";

export const createScheduleService = async (payload: CreateSchedule, id: number) => {
    const {realEstateId, date, hour} = payload

    const parsedHours = parseInt(hour)

    
    
    if(parsedHours < 8 || parsedHours > 18){
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }
    
    const scheduleDate = new Date(date)
    const weekDay = scheduleDate.getDay()
    if(weekDay === 0 || weekDay === 6){
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }



    const user = await usersRepository.findOneBy({id: id})
    const foundRealEstate = await realEstatesRepository.findOneBy({id: realEstateId})
    if(!foundRealEstate) throw new AppError("RealEstate not found", 404)



    const existsRealEstateSchedule = await schedulesRepository.findOne({ 
        where: {
            date: date,
            hour: hour,
            realEstate: {id: realEstateId }
        }
    })

    if(existsRealEstateSchedule){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    const existsSchedule = await schedulesRepository.findOne({ 
        where: {
            user: {id: id},
            date: date,
            hour: hour
        }
    })

    if(existsSchedule){
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }



    const newSchedule = schedulesRepository.create({
        ...payload,
        user: {id: id},
        realEstate: foundRealEstate
    })

    return await schedulesRepository.save(newSchedule)
}