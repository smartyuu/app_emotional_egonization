import {JournalEntry, TimelinePoint} from '../types';

export const journalPrompts = [
  '今天最累的一刻是什么？',
  '有没有一个瞬间，你比自己表现出来的更难过？',
  '你的身体今天最紧绷的地方在哪里？'
];

export const journalEntries: JournalEntry[] = [
  {
    id: '1',
    title: '下班后终于安静了一点',
    preview: '今天没有真正崩掉，但一直像把肩膀提着走路。',
    content:
      '今天会议很多，我一直表现得很稳，可其实到下午的时候已经有点空了。回家以后坐在床边很久，什么都没做，只是觉得胸口有一点堵。',
    dateLabel: '今天 21:10',
    emotion: '隐性焦虑',
    emotionLevel: '中度',
    emotionHint: '你写得很克制，但身体信号里还有持续紧绷。',
    reply:
      '你已经很努力地把今天撑过去了。那种表面平静、身体却一直绷着的状态，往往比明显崩溃更消耗人。今晚先别急着要求自己恢复，只试着把肩膀放下来，慢一点呼吸，也许就已经是在照顾自己了。',
    tags: ['工作', '睡眠'],
    bodySignalSummary: '心率波动略高，晚间放松恢复偏慢。'
  },
  {
    id: '2',
    title: '一个还算柔软的上午',
    preview: '早上晒到太阳的时候，突然觉得自己还可以再试一次。',
    content:
      '起床的时候其实还是有点困，但拉开窗帘以后阳光很好。我突然觉得，今天也许没有想象中那么糟。',
    dateLabel: '昨天 09:30',
    emotion: '平静',
    emotionLevel: '轻度',
    emotionHint: '你的状态有些回暖，身体和文字都在慢慢松开。',
    reply:
      '这不是一个很热烈的开心，但它很珍贵。你在一个普通的早晨里，重新感到一点点愿意开始的力气，这就已经很好了。可以把这段感受记住，它会在你低落的时候提醒你，自己并不是完全失去感觉的人。',
    tags: ['日常', '恢复'],
    bodySignalSummary: '静息状态稳定，波动平缓。'
  }
];

export const timelinePoints: TimelinePoint[] = [
  {label: '周一', value: 3, emotion: '压抑'},
  {label: '周二', value: 4, emotion: '隐性焦虑'},
  {label: '周三', value: 2, emotion: '平静'},
  {label: '周四', value: 5, emotion: '情绪过载'},
  {label: '周五', value: 3, emotion: '低落'},
  {label: '周六', value: 2, emotion: '平静'},
  {label: '周日', value: 2, emotion: '平静'}
];
