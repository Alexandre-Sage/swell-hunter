import { Id, ObjectToDbTypeMapper } from "./Global.type";
import { UserId } from "./User.type";

type SpotId = Id<string>;
interface Spot {
  id: SpotId;
  userId: UserId;
  spotName: string;
  coordinates: [number,number,number];
  createdAt: Date;
  updatedAt: Date;
}
type SpotRow = ObjectToDbTypeMapper<Spot>;
export { SpotId, Spot, SpotRow };
