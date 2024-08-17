import { ISocialInfo } from "@/app/_models/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface ISocialMediaIconsProps {
  socialMedia: ISocialInfo[];
}

export const SocialMediaIcons: React.FC<ISocialMediaIconsProps> = ({
  socialMedia,
}) => {
  const styles = {
    iconsContainer: `m-auto m-0 inline`,
    icons: `p-1 inline`,
  };

  return (
    <div className={styles.iconsContainer}>
      {socialMedia.map((item) => (
        <div className={styles.icons}>
          <Link href={item.url}>
            <FontAwesomeIcon icon={item.icon} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
