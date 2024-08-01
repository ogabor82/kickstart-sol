import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x4E926F347DC4B8Af2ae30cFB3B105F3cfEecBE3c'
);

export default instance;
