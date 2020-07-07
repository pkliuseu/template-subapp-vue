import { DataType } from "wl-core"
import { Button, Menu, Submenu, Input, MenuItem, MenuItemGroup, Scrollbar, Loading, Message, MessageBox, Select } from "element-ui";

Select.props.clearable = { type: Boolean, default: true }
Select.props.filterable = { type: Boolean, default: true }
Input.props.clearable = { type: Boolean, default: true }

/**
 * message方法 默认可关闭
 * @param {*} options 消息 | 配置项
 */
export function message(options) {
  DataType.isObject(options)
    ? Message({
      showClose: true,
      ...options
    })
    : Message({
      showClose: true,
      message: options
    })
}

/**
 * 确认框，默认确定取消按钮，警告状态
 * @param {*} message 提示语
 * @param {*} title 标题
 * @param {*} options 配置
 */
export function confirm(message, title = "提示", options = {}) {
  let _options = {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    ...options
  }
  return MessageBox.confirm(message, title, _options)
}

export default {
  components: [
    Button, Menu, Submenu, MenuItem, MenuItemGroup, Scrollbar, Input, Select
  ],
  serve: [Loading],
  methods: [message, confirm]
}

