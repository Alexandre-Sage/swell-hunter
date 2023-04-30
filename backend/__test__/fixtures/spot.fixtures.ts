import { randomUUID } from "crypto";
import { Spot, SpotId } from "../../src/types";
import { SpotRepository } from "../../src/SQL/repositories/spot";
import { transaction } from "../../src/SQL/database/connection";
import { now } from "./Globals.fixtures";
import { userIds } from "./user.fixtures";
import { SpotMapper } from "../../src/SQL/mappers";

const spotIds = [
  randomUUID(),
  randomUUID(),
  randomUUID(),
  randomUUID(),
  randomUUID(),
] as SpotId[];
const spotRepository = new SpotRepository(transaction);
const { dbRowToObject, objectToDbRow } = new SpotMapper();
const spotFactory = ({
  coordinates,
  createdAt,
  id,
  spotName,
  updatedAt,
  userId,
}: Partial<Spot>): Spot => ({
  coordinates: coordinates ?? [12, -24, 0],
  createdAt: createdAt ?? now,
  id: id ?? spotIds[0],
  spotName: spotName ?? "spot-test",
  updatedAt: updatedAt ?? now,
  userId: userId ?? userIds[0],
});
const spotSetUp = async () => {
  const spots = spotIds.map((id) =>
    objectToDbRow(spotFactory({ id, spotName: `spot-${id}` }))
  );
  transaction(async (tsx) => tsx.table("spots").insert(spots));
};
const spotTeadDown = () =>
  transaction(async (tsx) => tsx.table("spots").delete());

const fetchSpot = (id: SpotId) =>
  transaction(async (tsx) => tsx.table("spots").select("*").where({ id }));
const fetchSpots = () =>
  transaction(async (tsx) => tsx.table("spots").select("*"));
export { spotIds, fetchSpot, fetchSpots, spotFactory, spotSetUp, spotTeadDown };
