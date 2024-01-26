import CustomAvatar from "./custom.avatar";
import { Text } from "./text";

type Props = {
  avatarUrl?: string;
  name: string;
  shape?: "circle" | "square";
};

const SelectOptionWithAvatar = ({ avatarUrl, name, shape }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <CustomAvatar src={avatarUrl} name={name} shape={shape} />
      <Text>{name}</Text>
    </div>
  );
};

export default SelectOptionWithAvatar;
