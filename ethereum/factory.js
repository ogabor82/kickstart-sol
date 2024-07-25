import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x322BBFDf208dc333B106c607849D65a2BC8D1B0B'
);

export default instance;
