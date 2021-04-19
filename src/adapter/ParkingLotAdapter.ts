import ParkingLot from "../core/entity/ParkingLot";

export default class ParkingLotAdapter {
    static create(code: string, capacity: number, openHour: number,
                  closeHour: number, occupiedSpaces: number): ParkingLot {
        return new ParkingLot(
            code,
            capacity,
            openHour,
            closeHour,
            occupiedSpaces
        )
    }
}