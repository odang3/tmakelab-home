import { useState } from 'react';
import { profile } from '../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState<'idle' | 'ok' | 'fail'>('idle');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied('ok');
    } catch {
      setCopied('fail');
    }
  };
  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <h2>연락하기</h2>
        <p className="section__sub">협업·문의는 아래 주소로 연락 주세요.</p>
        <div className="contact">
          <a className="addr" href={`mailto:${profile.email}`}>{profile.email}</a>
          <button type="button" className="btn" onClick={copy} aria-live="polite">
            {copied === 'ok' ? '복사됨' : copied === 'fail' ? '주소를 직접 선택하세요' : '주소 복사'}
          </button>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </div>
    </section>
  );
}
