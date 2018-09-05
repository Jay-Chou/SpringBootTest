package com.wpp.Mapping;

import com.wpp.beans.Goods;

import java.util.List;

public interface GoodsMapper {
    /**
     * 根据id查询商品数据
     * */
    public Goods findById(int _goodsid);

    /**
     * 查询所有商品数据
     * */
    public List<Goods> query();
}
