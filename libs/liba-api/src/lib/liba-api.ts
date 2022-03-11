import { libbApi } from '@nx-cache/libb-api';
import { libcApi } from '@nx-cache/libc-api';

libbApi();
libcApi();

export function libaApi(): string {
  return 'liba-api';
}
