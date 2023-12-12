package Pirveta.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Pirveta.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ФормирРаспред
 */
@Entity(name = "IISPirvetaФормирРаспред")
@Table(schema = "public", name = "ФормирРаспред")
public class FormirRaspred {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерДокРаспр")
    private Integer номердокраспр;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpisokKontej")
    @Convert("SpisokKontej")
    @Column(name = "СписокКонтей", length = 16, unique = true, nullable = false)
    private UUID _spisokkontejid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpisokKontej", insertable = false, updatable = false)
    private SpisokKontej spisokkontej;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokumPostav")
    @Convert("DokumPostav")
    @Column(name = "ДокумПостав", length = 16, unique = true, nullable = false)
    private UUID _dokumpostavid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokumPostav", insertable = false, updatable = false)
    private DokumPostav dokumpostav;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpisokBarzh")
    @Convert("SpisokBarzh")
    @Column(name = "СписокБарж", length = 16, unique = true, nullable = false)
    private UUID _spisokbarzhid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpisokBarzh", insertable = false, updatable = false)
    private SpisokBarzh spisokbarzh;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PunktPogruzki")
    @Convert("PunktPogruzki")
    @Column(name = "ПунктПогрузки", length = 16, unique = true, nullable = false)
    private UUID _punktpogruzkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PunktPogruzki", insertable = false, updatable = false)
    private PunktPogruzki punktpogruzki;


    public FormirRaspred() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерДокРаспр() {
      return номердокраспр;
    }

    public void setНомерДокРаспр(Integer номердокраспр) {
      this.номердокраспр = номердокраспр;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}