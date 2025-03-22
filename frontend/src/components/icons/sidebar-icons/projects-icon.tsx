import { SidebarIconProps } from "../../layouts/app-layout/sidebar/sidebar-data";

export const ProjectsIcon = ({ color }: SidebarIconProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.425 6.4625H14.025M7.18164 8.28508L10.9581 13.7253M4.62 8.525H6.105C6.56704 8.525 6.79807 8.525 6.97454 8.43508C7.12978 8.35598 7.25599 8.22977 7.33509 8.07454C7.425 7.89807 7.425 7.66704 7.425 7.205V5.72C7.425 5.25796 7.425 5.02693 7.33509 4.85046C7.25599 4.69523 7.12978 4.56902 6.97454 4.48992C6.79807 4.4 6.56704 4.4 6.105 4.4H4.62C4.15796 4.4 3.92694 4.4 3.75046 4.48992C3.59523 4.56902 3.46902 4.69523 3.38992 4.85046C3.3 5.02693 3.3 5.25796 3.3 5.72V7.205C3.3 7.66704 3.3 7.89807 3.38992 8.07454C3.46902 8.22977 3.59523 8.35598 3.75046 8.43508C3.92694 8.525 4.15796 8.525 4.62 8.525ZM12.045 17.6H13.53C13.9921 17.6 14.2231 17.6 14.3996 17.5101C14.5548 17.431 14.681 17.3048 14.7601 17.1496C14.85 16.9731 14.85 16.7421 14.85 16.28V14.795C14.85 14.3329 14.85 14.1019 14.7601 13.9254C14.681 13.7702 14.5548 13.644 14.3996 13.5649C14.2231 13.475 13.9921 13.475 13.53 13.475H12.045C11.5829 13.475 11.3519 13.475 11.1755 13.5649C11.0202 13.644 10.894 13.7702 10.8149 13.9254C10.725 14.1019 10.725 14.3329 10.725 14.795V16.28C10.725 16.7421 10.725 16.9731 10.8149 17.1496C10.894 17.3048 11.0202 17.431 11.1755 17.5101C11.3519 17.6 11.5829 17.6 12.045 17.6ZM15.345 8.525H16.83C17.2921 8.525 17.5231 8.525 17.6996 8.43508C17.8548 8.35598 17.981 8.22977 18.0601 8.07454C18.15 7.89807 18.15 7.66704 18.15 7.205V5.72C18.15 5.25796 18.15 5.02693 18.0601 4.85046C17.981 4.69523 17.8548 4.56902 17.6996 4.48992C17.5231 4.4 17.2921 4.4 16.83 4.4H15.345C14.8829 4.4 14.6519 4.4 14.4755 4.48992C14.3202 4.56902 14.194 4.69523 14.1149 4.85046C14.025 5.02693 14.025 5.25796 14.025 5.72V7.205C14.025 7.66704 14.025 7.89807 14.1149 8.07454C14.194 8.22977 14.3202 8.35598 14.4755 8.43508C14.6519 8.525 14.8829 8.525 15.345 8.525Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
