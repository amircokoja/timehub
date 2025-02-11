import classNames from "classnames";

interface Color {
  name: string;
  value: string;
}

const colors: Color[] = [
  {
    name: "blue",
    value: "bg-blue-600",
  },
  {
    name: "purple",
    value: "bg-purple-500",
  },
  {
    name: "indigo",
    value: "bg-indigo-500",
  },
  {
    name: "pink",
    value: "bg-pink-500",
  },
  {
    name: "teal",
    value: "bg-teal-400",
  },
  {
    name: "green",
    value: "bg-green-400",
  },
  {
    name: "yellow",
    value: "bg-yellow-300",
  },
  {
    name: "orange",
    value: "bg-orange-400",
  },
  {
    name: "red",
    value: "bg-red-500",
  },
];

interface Props {
  handleColorChange: (color: string) => void;
  value: string;
}

const ColorSelector: React.FC<Props> = ({
  handleColorChange,
  value,
}: Props) => {
  return (
    <div>
      <div className="mb-2 block text-sm font-medium text-gray-900">
        Tag Color
      </div>
      <div className="flex flex-wrap items-center">
        {colors.map((color) => (
          <button
            onClick={() => handleColorChange(color.value)}
            key={color.name}
            type="button"
            className={classNames("mb-2 mr-2 size-6 rounded-sm", color.value, {
              "border-4 border-gray-900": value === color.value,
            })}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
