'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { t, type Locale } from '../config/brand';
import { copy, habits } from '../content/data';
export function HabitDemo({ locale, dark = false }: {
    locale: Locale;
    dark?: boolean;
}) { const [done, setDone] = useState([false, true, false]); return <div className={'hl-phone ' + (dark ? 'hl-phone-dark' : '')}><div className="hl-phone-status"><span>{locale === 'zh' ? '周一 07:32' : 'Mon, 07:32'}</span><i /><span>▮▮▮</span></div><h3>{t(copy('今日任务', 'Today Task'), locale)}</h3><small>{t(copy(`已完成 ${done.filter(Boolean).length} / 3 个习惯`, `${done.filter(Boolean).length} of 3 habits done`), locale)}</small>{habits.slice(0, 3).map((habit, i) => <button aria-pressed={done[i]} className="hl-habit-row" key={habit.en} onClick={() => setDone(done.map((value, j) => j === i ? !value : value))}><span className={'hl-check ' + (done[i] ? 'checked' : '')}>{done[i] ? '✓' : ''}</span><span>{t(habit, locale)}<small>{t(copy('每天进步一点点', 'A little progress every day'), locale)}</small></span><b>{[85, 100, 67][i]}%</b></button>)}<div className="hl-mini-chart"><span>{t(copy('本周 · 21 次打卡', 'This week · 21 check-ins'), locale)}</span><div>{[30, 55, 40, 80, 62, 100, 84].map((v, i) => <motion.i key={i} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ delay: i * .1, duration: .6 }} style={{ height: v + '%' }}/>)}</div></div><h4>{t(copy('日常时间块', 'Routine Stacks'), locale)}</h4><div className="hl-stacks">{['晨间启动', '专注时间', '晚间收尾'].map((zh, i) => <div key={zh}>{locale === 'zh' ? zh : ['Morning Start', 'Focus Block', 'Evening Reset'][i]}<small>{t(copy('为自己留一点时间', 'Make room for yourself'), locale)}</small></div>)}</div></div>; }
