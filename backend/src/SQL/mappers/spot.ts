import { DbRow, Mapper, Spot, SpotRow } from "../../types";

export class SpotMapper implements Mapper<Spot, SpotRow> {
  dbRowToObject = ({
    coordinates,
    created_at,
    id,
    spot_name,
    updated_at,
    user_id,
  }: SpotRow): Spot => ({
    coordinates,
    createdAt: created_at,
    id,
    spotName: spot_name,
    updatedAt: updated_at,
    userId: user_id,
  });
  objectToDbRow = ({
    coordinates,
    createdAt,
    id,
    spotName,
    userId,
  }: Spot): DbRow<SpotRow> => ({
    coordinates,
    created_at: createdAt,
    id,
    spot_name: spotName,
    updated_at: new Date(),
    user_id: userId,
  });
}
