import { TaroEventTarget } from '../dom/EventTarget'

import type { TaroDocument } from '../dom/Document'

class Window extends TaroEventTarget {
  public _doc: TaroDocument

  get document (): TaroDocument {
    return this._doc
  }

  setTimeout (...args: Parameters<typeof setTimeout>) {
    setTimeout(...args)
  }

  clearTimeout (...args: Parameters<typeof clearTimeout>) {
    clearTimeout(...args)
  }
}

export { Window }
