import moment from 'moment';
import unkownAvatar from '../../../assets/images/avatars/unkown.jpeg';
const defaultGradiant = ['#363636', '#2e2e2e', '#242323'];

export const chineseSpam = {
  name: '+1 (555) 232-5254',
  avatar: unkownAvatar,
  exchanges: [
    {
      timeStamp: moment()
        .subtract(5, 'months')
        .set('hour', 15)
        .set('minute', 2),
    },
    {
      avatar: unkownAvatar,
      color: defaultGradiant,
      exchange: [
        `指任面著戦界着村門発探兵紛合一保。分棋約磨糠蔵市世訴調子目巡野語詳拳北門競。容院化告故村奨闘半早催誰。地計日査典費万米橋都終辞政納入概夜覧。条局葉想世転平労室確文中。型獲国書県兆銀題大午新声括安公遺転。果敬新稿詩位記件足部認復康万満。本断論性史考社何展決年芸本分質栃材。迎掲身得戦養題細声転榎恋全宮罪母利橋。

査代出茂政経実緒定成裸周笑。崎花高歩議報経任譜抽図位正術現定。天割方夜人流文費主皇学九初伸載特限車由。紙間導者開初病広変際競覚葉護熊。止断光注映長強登声紹協基設稿。項用速述内電載衝乗容表暮催程年当頼。要済解脚球成軍全不提竹千育提気。携改最松世高和水将海簡易園庭。真子互調添真棄安省責笛険。阪平光新力映供念著境頭安。`,
      ],
    },
  ],
};
