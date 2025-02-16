'use client';

import { useEffect, useState } from 'react';
import Dropdown from '../Dropdown';
import { NodeApi, TreeApi } from 'react-arborist';
import { TreeViewData } from '../../../../@types/menu';
import TreeView from '../TreeView';
import { useMenuStore } from '@/store/reducers/menu';
import {
  buildTreeView,
  getNodeDepthById,
  getNodeWithChildrenById,
} from '@/shared/utils/tree';
import Button from '../Button';

const TreeMenu = () => {
  const { fetchMenus, menus, setDetail } = useMenuStore();
  const [tree, setTree] = useState<TreeApi<TreeViewData> | null | undefined>(
    null,
  );
  const [selectedMenu, setSelectedMenu] = useState<TreeViewData | null>(null);
  const [menuItems, setMenuItems] = useState<TreeViewData[]>([]);
  const [treeViewData, setTreeViewData] = useState<TreeViewData[]>([]);

  useEffect(() => {
    fetchMenus();
  }, []);

  useEffect(() => {
    if (selectedMenu) {
      setTreeViewData(
        getNodeWithChildrenById(buildTreeView(menus), selectedMenu.id) ?? [],
      );
    } else {
      setTreeViewData([]);
    }
  }, [selectedMenu?.id, menus]);

  useEffect(() => {
    setMenuItems(
      menus
        .filter((d) => !d.parentId)
        .map((menu) => ({
          id: menu.id,
          name: menu.name,
        })),
    );
  }, [menus]);

  const onNodeSelect = (node: NodeApi<TreeViewData>) => {
    const nodeId = node?.data.id;
    const nodeData = menus.find((m) => m.id === nodeId);
    const parentData = menus.find((m) => m.id === nodeData?.parentId);
    setDetail({
      id: nodeData?.id as string,
      name: nodeData?.name as string,
      parentName: parentData?.name as string,
      depth:
        getNodeDepthById(buildTreeView(menus), nodeData?.id as string) ?? 0,
      parentId: nodeData?.parentId ?? null,
    });
  };

  const onDropdownSelect = (d: TreeViewData | null) => {
    if (d) setSelectedMenu(d);
    else {
      setSelectedMenu(null);
      setDetail({
        id: '',
        name: '',
        parentName: '',
        depth: 0,
        parentId: null,
      });
    }
  };

  return (
    <div className="bg-white py-8 w-full md:w-[48%]">
      <div className='mb-2'>Menu</div>
      <div className="flex flex-col mb-6">
        <Dropdown<TreeViewData>
          items={menuItems}
          onSelect={(d) => onDropdownSelect(d)}
          selected={selectedMenu?.name}
          renderItem={(item) => item.name}
          placeholder='Select Available Menu (leave empty to create new)'
        />
      </div>

      <div className="flex my-4 space-x-4">
        <Button
          onClick={() => tree?.openAll()}
          className="flex-1 px-4 py-2 bg-gray-800 text-white hover:bg-gray-700"
        >
          Expand All
        </Button>
        <Button
          onClick={() => tree?.closeAll()}
          className="flex-1 px-4 py-2 border border-gray-400 text-gray-600 hover:bg-gray-100"
        >
          Collapse All
        </Button>
      </div>

      <div>
        <TreeView
          data={treeViewData}
          setTreeRef={(t) => setTree(t)}
          onNodeSelect={onNodeSelect}
          onBlueButtonClicked={(node) => {
            setDetail({
              id: '',
              name: '',
              parentName: node.name,
              depth:
                (getNodeDepthById(buildTreeView(menus), node?.id) ?? 0) + 1,
              parentId: node.id,
            });
          }}
        />
      </div>
    </div>
  );
};

export default TreeMenu;
