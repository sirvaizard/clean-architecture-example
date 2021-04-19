import GetParkingLot from "../core/usecase/GetParkingLot"
import ParkingLotRepositoryMemory from "../infra/repository/ParkingLotRepositoryMemory"

export default class ParkingLotController {
    static async getParkingLot(params: any, body: any) {
        const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory()
        const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory)
        const parkingLot = await getParkingLot.execute(params.code)

        return parkingLot
    }
}