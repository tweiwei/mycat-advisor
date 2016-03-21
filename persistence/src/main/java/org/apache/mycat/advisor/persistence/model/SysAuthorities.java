package org.apache.mycat.advisor.persistence.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by cjl on 2016/3/20.
 */
@Table(name = "sys_authorities")
public class SysAuthorities {
    private Long authorityId;
    private String authorityMark;
    private String authorityName;
    private String authorityDesc;
    private String message;
    private Integer enable;
    private Integer issys;
    private Long moduleId;

    @Id
    @Column(name = "AUTHORITY_ID", nullable = false, insertable = true, updatable = true)
    public Long getAuthorityId() {
        return authorityId;
    }

    public void setAuthorityId(Long authorityId) {
        this.authorityId = authorityId;
    }

    @Basic
    @Column(name = "AUTHORITY_MARK", nullable = true, insertable = true, updatable = true, length = 100)
    public String getAuthorityMark() {
        return authorityMark;
    }

    public void setAuthorityMark(String authorityMark) {
        this.authorityMark = authorityMark;
    }

    @Basic
    @Column(name = "AUTHORITY_NAME", nullable = false, insertable = true, updatable = true, length = 100)
    public String getAuthorityName() {
        return authorityName;
    }

    public void setAuthorityName(String authorityName) {
        this.authorityName = authorityName;
    }

    @Basic
    @Column(name = "AUTHORITY_DESC", nullable = true, insertable = true, updatable = true, length = 200)
    public String getAuthorityDesc() {
        return authorityDesc;
    }

    public void setAuthorityDesc(String authorityDesc) {
        this.authorityDesc = authorityDesc;
    }

    @Basic
    @Column(name = "MESSAGE", nullable = true, insertable = true, updatable = true, length = 100)
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Basic
    @Column(name = "ENABLE", nullable = true, insertable = true, updatable = true)
    public Integer getEnable() {
        return enable;
    }

    public void setEnable(Integer enable) {
        this.enable = enable;
    }

    @Basic
    @Column(name = "ISSYS", nullable = true, insertable = true, updatable = true)
    public Integer getIssys() {
        return issys;
    }

    public void setIssys(Integer issys) {
        this.issys = issys;
    }

    @Basic
    @Column(name = "MODULE_ID", nullable = true, insertable = true, updatable = true)
    public Long getModuleId() {
        return moduleId;
    }

    public void setModuleId(Long moduleId) {
        this.moduleId = moduleId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SysAuthorities that = (SysAuthorities) o;

        if (authorityId != null ? !authorityId.equals(that.authorityId) : that.authorityId != null) return false;
        if (authorityMark != null ? !authorityMark.equals(that.authorityMark) : that.authorityMark != null)
            return false;
        if (authorityName != null ? !authorityName.equals(that.authorityName) : that.authorityName != null)
            return false;
        if (authorityDesc != null ? !authorityDesc.equals(that.authorityDesc) : that.authorityDesc != null)
            return false;
        if (message != null ? !message.equals(that.message) : that.message != null) return false;
        if (enable != null ? !enable.equals(that.enable) : that.enable != null) return false;
        if (issys != null ? !issys.equals(that.issys) : that.issys != null) return false;
        if (moduleId != null ? !moduleId.equals(that.moduleId) : that.moduleId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = authorityId != null ? authorityId.hashCode() : 0;
        result = 31 * result + (authorityMark != null ? authorityMark.hashCode() : 0);
        result = 31 * result + (authorityName != null ? authorityName.hashCode() : 0);
        result = 31 * result + (authorityDesc != null ? authorityDesc.hashCode() : 0);
        result = 31 * result + (message != null ? message.hashCode() : 0);
        result = 31 * result + (enable != null ? enable.hashCode() : 0);
        result = 31 * result + (issys != null ? issys.hashCode() : 0);
        result = 31 * result + (moduleId != null ? moduleId.hashCode() : 0);
        return result;
    }
}
