package org.apache.mycat.advisor.service.um.usertype;

import org.apache.mycat.advisor.persistence.model.TabUserType;
import org.apache.mycat.advisor.service.base.BaseService;

import java.util.List;

/**
 * Created by cjl on 2016/3/25.
 */
public interface UserTypeService extends BaseService<TabUserType> {
    List<TabUserType> all();
}
