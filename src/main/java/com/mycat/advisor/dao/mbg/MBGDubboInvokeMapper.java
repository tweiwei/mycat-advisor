package com.mycat.advisor.dao.mbg;

import com.mycat.advisor.entity.mbg.DubboInvoke;
import com.mycat.advisor.entity.mbg.DubboInvokeExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface MBGDubboInvokeMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dubbo_invoke
     *
     * @mbggenerated
     */
    int countByExample(DubboInvokeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dubbo_invoke
     *
     * @mbggenerated
     */
    int deleteByExample(DubboInvokeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dubbo_invoke
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dubbo_invoke
     *
     * @mbggenerated
     */
    int insert(DubboInvoke record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dubbo_invoke
     *
     * @mbggenerated
     */
    int insertSelective(DubboInvoke record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dubbo_invoke
     *
     * @mbggenerated
     */
    List<DubboInvoke> selectByExample(DubboInvokeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dubbo_invoke
     *
     * @mbggenerated
     */
    DubboInvoke selectByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dubbo_invoke
     *
     * @mbggenerated
     */
    int updateByExampleSelective(@Param("record") DubboInvoke record, @Param("example") DubboInvokeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dubbo_invoke
     *
     * @mbggenerated
     */
    int updateByExample(@Param("record") DubboInvoke record, @Param("example") DubboInvokeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dubbo_invoke
     *
     * @mbggenerated
     */
    int updateByPrimaryKeySelective(DubboInvoke record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dubbo_invoke
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(DubboInvoke record);
}