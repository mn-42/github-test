import { NgcxTreeNodeWrapper } from '@cluetec/ngcx-tree';
import { NgcxTreeSampleData } from './_model';
import { someMoreNodes } from './model/more-nodes';

export const disableDndOnLevels: NgcxTreeSampleData = {
  title: 'Disable Drag & Drop sometimes',
  description:
    'Root nodes are static and may not be moved, neither sub-nodes may be moved to become a root node. Also allow only moving leafs (without children).',
  nodes: someMoreNodes,
  config: {
    allowDrag: (node: NgcxTreeNodeWrapper<any>) => node.depth > 0,
    allowDrop: (
      node: NgcxTreeNodeWrapper<any>,
      _intoNode?: NgcxTreeNodeWrapper<any>
    ) => (node.children?.length ?? 0) === 0,
  },
};
