// Importar os componentes necessários da biblioteca react-share
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';

interface ShareButtonsProps {
    url: string;
    title: string;
}

//const ShareButtons = ({ url, title }: any) => {
const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
    return (
        <div className="flex space-x-1 md:space-x-4">
            <FacebookShareButton url={url} title={title} >
                <FacebookIcon size={24} round />
            </FacebookShareButton>
            <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon size={24} round />
            </WhatsappShareButton>
            <TwitterShareButton url={url} title={title} className=''>
                <TwitterIcon size={24} round />
            </TwitterShareButton>
            {/* <LinkedinShareButton url={url} summary={title}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton> */}
        </div>
    );
};

export default ShareButtons;
