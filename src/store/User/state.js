export default function() {
  return {
    user: null,
    load: false,
    token:localStorage.getItem('token')||'',
  }
}
