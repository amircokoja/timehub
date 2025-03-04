import { SidebarItemType } from "./sidebar-data";
import Link from "next/link";
interface Props {
  item: SidebarItemType;
}

export default function SidebarItem({ item }: Props) {
  return (
    <li>
      <Link
        href={item.href}
        className="group flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100"
      >
        <item.icon />
        <span className="ms-3 text-sm">{item.label}</span>
      </Link>
    </li>
  );
}
