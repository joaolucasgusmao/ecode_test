import { ShareLinks } from "@/types/HomeInfos";

interface DropdownProps {
  shareLink: ShareLinks;
}

const Dropdown = ({ shareLink }: DropdownProps) => {
  return (
    <ul>
      <li>
        <a href={shareLink.facebook}>Facebook</a>
      </li>
      <li>
        <a href={shareLink.twitter}>Twitter</a>
      </li>
      <li>
        <a href={shareLink.whatsapp}>WhatsApp</a>
      </li>
    </ul>
  );
};

export default Dropdown;
