import { ISocialInfo } from "@/app/_models/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISocialMediaIconsProps {
  socialMedia: ISocialInfo[];
}

export const SocialMediaIcons: React.FC<ISocialMediaIconsProps> = ({
  socialMedia,
}) => {
  const styles = {
    iconsContainer: `m-auto m-0 inline`,
    icons:`p-1 inline`
  };

  return (
    <div className={styles.iconsContainer}>
      {socialMedia.map((item) => (
        <div className={styles.icons}>
        <FontAwesomeIcon icon={item.icon} />
        </div>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
