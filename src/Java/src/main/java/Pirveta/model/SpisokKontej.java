package Pirveta.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Pirveta.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: СписокКонтей
 */
@Entity(name = "IISPirvetaСписокКонтей")
@Table(schema = "public", name = "СписокКонтей")
public class SpisokKontej {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКонт")
    private Integer номерконт;

    @Column(name = "НаимКонт")
    private String наимконт;


    public SpisokKontej() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКонт() {
      return номерконт;
    }

    public void setНомерКонт(Integer номерконт) {
      this.номерконт = номерконт;
    }

    public String getНаимКонт() {
      return наимконт;
    }

    public void setНаимКонт(String наимконт) {
      this.наимконт = наимконт;
    }


}