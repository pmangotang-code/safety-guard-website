// 관리자에서 실제 값을 확인한 후 지정합니다. null은 미연결입니다.
window.CAFE24_CONFIG = Object.freeze({
  categoryNumbers: { voice: null, alarm: null, beacon: null, remote: null },
  boardNumbers: { blog: null, cases: null, reviews: null, inquiry: null },
  productNumbers: { voice: null, sensor: null, power: null, beacon: null, remote: null, timer: null },
  canonicalOrigin: null
});
// 이 설정만으로 서버 모듈이 연결되지는 않습니다. docs/cafe24-install-guide.md 참조.
