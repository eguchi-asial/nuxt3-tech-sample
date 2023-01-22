import { DetailResponse } from "~~/types/app";

export const STATE_KEYS = {
  KEY_DETAIL: 'details-state-key'
}

export const useDetailState = (detail: DetailResponse | undefined) => {
  useState<DetailResponse | undefined>(STATE_KEYS.KEY_DETAIL, () => detail)
}
