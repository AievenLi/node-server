
import superagent from 'superagent'
class wxqiye {
    constructor() { }
    async getwxToken(ctx) {
        let from = {
            appid: 'ww3577a1f12685dd23',
            secret: 'GN2RAsEKy1Wx9_lKdw-ZYLwfsCiFmz319C3a2VS-maU'
        }
        await superagent.get(`https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${from.appid}&corpsecret=${from.secret}`).then(res => {
            ctx.body = res.body.access_token
        }).catch(res => {
        })
    }
    async gologin(ctx) {
        let infodata = {
            appid: 'ww3577a1f12685dd23',
            redirect_uri: 'yhhl.info%lieryd',
        }
        let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${infodata.appid}&redirect_uri=${infodata.redirect_uri}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
        ctx.response.redirect(url)
        console.log('123')
    }


}
export default new wxqiye();