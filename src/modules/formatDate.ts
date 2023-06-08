export function FormatDateToKoShort(dateStr: Date | number) {
  if (!dateStr) {
    return '';
  }
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const monthStr = month < 10 ? `0${month}` : `${month}`;
  const dayStr = day < 10 ? `0${day}` : `${day}`;
  return `${year}년 ${monthStr}월 ${dayStr}일`;
}

export function formatAgo(dateStr: Date | number): string {
  const nowDate = new Date();
  const date = new Date(dateStr);
  const diff = nowDate.getTime() - date.getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  if (years > 0) {
    return ` · ${years}년 전`;
  }
  if (months > 0) {
    return `${months}달 전`;
  }
  if (days > 0) {
    return `${days}일 전`;
  }
  if (hours > 0) {
    return `${hours}시간 전`;
  }
  if (minutes > 0) {
    return `${minutes}분 전`;
  }
  return '지금';
}

export function formatKoreanTime(dateStr: string): string {
  if (!dateStr) {
    return '';
  }
  const date = new Date(dateStr);

  const formattedDate = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekdayIndex = date.getDay();
  const weekday = weekdays[weekdayIndex];

  const hours = date.getHours();
  const ampm = hours >= 12 ? '오후' : '오전';
  const twelveHours = hours % 12 || 12;
  const minutes = date.getMinutes();
  const formattedTime = `${ampm} ${twelveHours
    .toString()
    .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return `${formattedDate.replace(/\./g, '. ')} (${weekday}) ${formattedTime}`;
}
