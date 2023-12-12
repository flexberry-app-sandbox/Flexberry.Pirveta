package Pirveta.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Pirveta.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: СписокБарж
 */
@Entity(name = "IISPirvetaСписокБарж")
@Table(schema = "public", name = "СписокБарж")
public class SpisokBarzh {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерБарж")
    private Integer номербарж;

    @Column(name = "Производитель")
    private String производитель;


    public SpisokBarzh() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерБарж() {
      return номербарж;
    }

    public void setНомерБарж(Integer номербарж) {
      this.номербарж = номербарж;
    }

    public String getПроизводитель() {
      return производитель;
    }

    public void setПроизводитель(String производитель) {
      this.производитель = производитель;
    }


}