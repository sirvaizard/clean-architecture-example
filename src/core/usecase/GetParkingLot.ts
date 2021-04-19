import ParkingLot from "../entity/ParkingLot";
import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class GetParkingLot {
    parkingLotRepository: ParkingLotRepository

    constructor(parkingLotRepository: ParkingLotRepository) {
        this.parkingLotRepository = parkingLotRepository
    }

    async execute(code: string): Promise<ParkingLot> {
        return this.parkingLotRepository.getParkingLot(code)
    }
}