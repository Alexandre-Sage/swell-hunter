import { Id, ObjectToDbTypeMapper } from "./Global.type";
import { SpotId } from "./Spot.type";

type WaveConfigId = Id<string>;
interface WaveConfig {
  id: WaveConfigId;
  spot_id: SpotId;
  orientation: string;
  size: number;
  size_unit: string;
  period: string;
  createdAt: Date;
  updatedAt: Date;
}
type WaveConfigRow = ObjectToDbTypeMapper<WaveConfig>;

export { WaveConfig, WaveConfigId, WaveConfigRow };
