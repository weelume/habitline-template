'use client';
import { useState, type FormEvent } from 'react';
import { t, type Locale } from '../config/brand';
import { copy } from '../content/data';
export function DemoForm({ locale, kind = 'contact' }: {
    locale: Locale;
    kind?: 'contact' | 'subscribe' | 'waitlist';
}) {
    const [status, setStatus] = useState('');
    function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); console.debug('[Habitline] demo form validated', { kind, sent: false, saved: false }); setStatus(t(copy('本地校验通过：未发送、未保存任何信息。', 'Local validation passed: nothing was sent or saved.'), locale)); event.currentTarget.reset(); }
    return <form onSubmit={submit} className={'hl-form hl-form-' + kind}><p className="hl-demo-note">{t(copy('演示表单，仅在浏览器校验，不发送或保存。', 'Demo form: browser validation only. Nothing is sent or saved.'), locale)}</p>{kind === 'contact' && <><label>{t(copy('你的姓名 *', 'Your name *'), locale)}<input name="name" required maxLength={100} autoComplete="name"/></label><label>{t(copy('主题', 'Subject'), locale)}<input name="subject" maxLength={200}/></label></>}<label>{t(copy('邮箱地址 *', 'Email address *'), locale)}<input type="email" name="email" required placeholder={t(copy('请输入邮箱地址', 'Enter email address'), locale)} autoComplete="email"/></label>{kind === 'contact' && <label>{t(copy('留言', 'Message'), locale)}<textarea name="message" rows={5} maxLength={4000}/></label>}<button className="hl-button" type="submit">{t(kind === 'contact' ? copy('发送留言', 'Send a message') : kind === 'subscribe' ? copy('订阅', 'Subscribe') : copy('加入候补名单', 'Join the waitlist'), locale)}</button><p role="status">{status}</p></form>;
}
