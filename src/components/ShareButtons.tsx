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

const ShareButtons = ({ url, title }) => {
    return (
        <div className="flex space-x-4">
            <FacebookShareButton url={url} quote={title}>
                <FacebookIcon size={28} round />
            </FacebookShareButton>
            <WhatsappShareButton url={url} title={title} separator=":: ">
                <WhatsappIcon size={28} round />
            </WhatsappShareButton>
            <TwitterShareButton url={url} title={title} className='hidden md:flex'>
                <TwitterIcon size={28} round />
            </TwitterShareButton>
            {/* <LinkedinShareButton url={url} summary={title}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton> */}
        </div>
    );
};

export default ShareButtons;
