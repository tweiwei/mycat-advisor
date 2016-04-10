package org.apache.mycat.advisor.persistence.dao;

import org.apache.mycat.advisor.persistence.model.TabUserInfo;
import org.apache.mycat.advisor.persistence.util.MyMapper;

import java.util.List;
import java.util.Map;

public interface TabUserInfoMapper extends MyMapper<TabUserInfo> {

    List<Map<String,Object>> findByNameOrCode(String s);

    Map<String,Object> getCompanyAndPostByUserId(long id);

    List<Map<String,Object>> findListMapByUserName(String username);
}