import { TextInputProps } from "./TextInput.type";

const TextInput = (props: TextInputProps) => {
  const { type, defaultLabel, onChangeText, value, validate, disable } = props;

  return (
    <input
      style={style}
      type={type}
      placeholder={defaultLabel}
      onChange={(e: any) => onChangeText(e.target.value)}
      value={value}
    />
  );
};

const style: React.CSSProperties = {
  width: "98%",
  height: 60,
  borderRadius: 10,
  paddingLeft: "10px",
  justifyContent: "center",
  borderWidth: 1,
  marginBottom: 10,
  color: "black",
  fontSize: 20,
};

export default TextInput;
