export function getSiteVersion(hostname) {
  if (hostname.includes('aovua.niallmurphy.dev')) {
    return 'aovua.niallmurphy.dev';
  } else if (hostname.includes('aovua.com.vn')) {
    return 'aovua.com.vn';
  } else {
    // Default to 'aovua' for any other hostnames (like localhost)
    return 'aovua.com.vn';
  }
}
