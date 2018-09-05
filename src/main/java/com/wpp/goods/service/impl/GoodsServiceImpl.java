package com.wpp.goods.service.impl;

import com.wpp.Mapping.GoodsMapper;
import com.wpp.beans.Goods;
import com.wpp.goods.dao.GoodsDao;
import com.wpp.goods.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "GoodsService")
public class GoodsServiceImpl implements GoodsService {

    @Autowired
    private GoodsMapper goodDao;

    public Goods findById(int _goodsId) {
        // TODO Auto-generated method stub
        return goodDao.findById(_goodsId);
    }

    public List<Goods> query() {
        // TODO Auto-generated method stub
        return goodDao.query();
    }

}
